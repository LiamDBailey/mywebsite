// Define constants

// Define the layout of the SVG
const width = 400;
const height = 400;
const margin = {top: 50, right: 50, bottom: 50, left: 50};

// Define variables
let svg;
let fill;

// Define constants for scrolly behaviour
const scroller = scrollama();
const transitionDuration = 1000;
const scrollOffset = 0.75;

// Create the HTML wireframe
const loadContent = async () => {
  try {
    const response = await fetch("data/copy.json");
    const copy = await response.json();

    // Create a section element within which scrolly will work
    const new_section = d3.select("#scrolly-part")
      .append("section")
      .attr("id", "scrolly");

    // Create the article element
    const new_article = new_section.append("article")

    copy.steps.forEach(step => {
      new_article.append("div")
        .attr("class", step.step === "1" ? "step is-active" : "step")
        .attr("data-step", step.step)
        .append("p")
        .text(step.text)
    });

    new_section.append("div")
      .attr("class", "sticky-thing")
      // Create SVG element for D3 object in place of image
      .append("svg")
      .attr("width", width)
      .attr("height", height)
    
    // Store SVG reference
    svg = new_section.select(".sticky-thing svg");

    // Create D3 graph default
    await d3.csv("data/iris.csv").then(data => {

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => +d.X))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => +d.Y))
      .range([height - margin.bottom, margin.top]);

    // Create fill scale at top level
    fill = d3.scaleOrdinal()
      .domain(d3.map(data, d => d.Species))
      .range(d3.schemeCategory10);
    
    // Calculate means for each species
    const speciesMeans = d3.rollup(data,
        values => ({
            x: d3.mean(values, d => +d.X),
            y: d3.mean(values, d => +d.Y)
        }),
        d => d.Species
    )
    
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
    
    // Add axis labels
    svg.append("text")
      .attr("x", width/2)
      .attr("y", height - margin.bottom/3)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text("Sepal Length (mm)");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height/2)
      .attr("y", margin.left/3)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text("Petal Length (mm)");

    svg.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", d => x(+d.X))
      .attr("cy", d => y(+d.Y))
      .attr("r", 3)
    
    svg.selectAll(".species-label")
      .data(speciesMeans)
      .join("text")
      .attr("class", "species-label")
      .attr("x", d => x(d[1].x))
      .attr("y", d => y(d[1].y))
      .text(d => d[0])
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("opacity", 0);
  
    })
      
    // kick things off
    init();

  } catch (error) {
    console.error("Error loading content:", error);
    return null;
  }
}

loadContent();

// SCROLLY
// using d3 for convenience

// Select the object with class #scrolly
const scrolly = d3.select("#scrolly");

// Identify within this #scrolly object the sticky-thing and article
const sticky = scrolly.select(".sticky-thing");
const article = scrolly.select("article");

// Identify all the step objects inside the article
const steps = article.selectAll(".step");

// scrollama event handlers
const handleStepEnter = (response) => {
// response = { element, direction, index }

// Extract separately the individual element
// and the nested data
let el = d3.select(response.element);
let el_data = response.element.dataset

// remove is-active from all steps
// then add is-active to this step
steps.classed("is-active", false)
el.classed("is-active", true)

// Handle transitions based on step
// This is an array(?) of functions
const transitions = {
      "1": () => svg.selectAll("circle")
          .transition()
          .duration(transitionDuration)
          .attr("fill", "black"),
      "2": () => {
          svg.selectAll(".species-label")
              .transition()
              .duration(transitionDuration)
              .attr("opacity", 0);
          svg.selectAll("circle")
              .transition()
              .duration(transitionDuration)
              .attr("fill", d => fill(d.Species));
      },
      "3": () => svg.selectAll(".species-label")
          .transition()
          .duration(transitionDuration)
          .attr("opacity", 1)
  };

  // Here, we index the array of functions with the step number
  // ?.() will run the function IF the step number exists
  transitions[el_data.step]?.();

};

const init = () => {
scroller
.setup({
step: "#scrolly article .step",
offset: scrollOffset,
// Set this to true if we want to see where the scroller is
debug: false
})
.onStepEnter(handleStepEnter);

// setup resize event
window.addEventListener("resize", scroller.resize);
}