library(ggplot2)

## How rich is a person, based on WEIGHT
benjamin_weight <- 1 #https://en.wikipedia.org/wiki/United_States_one-hundred-dollar_bill
dollarcoin_weight <- 8.10 #https://en.wikipedia.org/wiki/Coins_of_the_United_States_dollar

dollar_weight <- dollarcoin_weight

## Average lifetime earning
avg_lifetime <- 1.53e6
(avg_lifetime/dollar_weight)/1000 ## 188kg

#Billie Eilish https://www.celebritynetworth.com/richest-celebrities/singers/billie-eilish-net-worth/
billie <- 50e6
(billie/dollar_weight)/1000/1000 ## 6 metric tonnes

## Leo (300 million)
leo <- 300e6 #https://www.celebritynetworth.com/richest-celebrities/actors/leonardo-dicaprio-net-worth/
(leo/dollar_weight)/1000/1000 ## 37 metric tonnes

## Arnie
arnie <- 1.1e9
(arnie/dollar_weight)/1000/1000 ## 135 metric tonnes ~ 

## Spielberg
spielberg <- 5.3e9
(spielberg/dollar_weight)/1000/1000 ## 654 metric tonnes ~ 

## Peter Thiel
thiel <- 16.9e9
(thiel/dollar_weight)/1000/1000 ## 2086 metric tonnes

## Adani
adani <- 60.5e9
(adani/dollar_weight)/1000/1000 ## 7469 metric tonnes

gates <- 107.1e9
(gates/dollar_weight)/1000/1000 ## 13222 metric tonnes

buffet <- 162.5e9
(buffet/dollar_weight)/1000/1000 ## 20061 metric tonnes

musk <- 334.5e9
(musk/dollar_weight)/1000/1000 ## 41296 metric tonnes

## How rich is a person, based on AREA
price_sqm_Austin <- 4387 #https://www.properstar.co.uk/united-states/austin/house-price

## What would be the area (sqm) if Musk spent all his money on homes?
musk <- 334.5e9
sqm_total <- (musk/price_sqm_Austin)
sqkm_total <- sqm_total/1e6

## How rich is a person based on years of work?
mean_annual_wage_lawyer <- 133820 #https://www.bls.gov/oes/current/oes_nat.htm#23-0000
musk/mean_annual_wage_lawyer

  ## Facts
avg_US_lifespan <- 77.5 # https://www.cdc.gov/nchs/fastats/life-expectancy.htm
# costs <- 4.4e6 #https://fortune.com/2024/10/18/the-exact-multimillion-dollar-figure-the-american-dream-now-costs-according-to-research/
costs <- 1.54e6 ## This is for a male high school graduate https://www.ssa.gov/policy/docs/research-summaries/education-earnings.html

## People to use

## Trudeau (~5mil)
justin <- 5e6 #https://www.celebritynetworth.com/richest-politicians/presidents/justin-trudeau-net-worth/
(justin/costs) * avg_US_lifespan

## Sabalenka (~10mil)
sabalenka <- 18.7e6 #https://www.forbes.com/profile/aryna-sabalenka/
(sabalenka/costs) * avg_US_lifespan

## Billie Eilish (~50mil)
billie <- 50e6 #https://www.celebritynetworth.com/richest-celebrities/singers/billie-eilish-net-worth/
(billie/costs) * avg_US_lifespan

## 100mil?
hundmil <- 100e6
(hundmil/costs) * avg_US_lifespan

## Leo (300 million)
leo <- 300e6 #https://www.celebritynetworth.com/richest-celebrities/actors/leonardo-dicaprio-net-worth/
(leo/costs) * avg_US_lifespan

## ?? (~750 million)
fivehundmil <- 500e6
(fivehundmil/costs) * avg_US_lifespan

## Arnie
arnie <- 1.1e9
(arnie/costs) * avg_US_lifespan

## Spielberg
spielberg <- 5.3e9
(spielberg/costs) * avg_US_lifespan

## Peter Thiel
thiel <- 16.9e9
(thiel/costs) * avg_US_lifespan

## Adani
adani <- 60.5e9
(adani/costs) * avg_US_lifespan

gates <- 107.1e9
(gates/costs) * avg_US_lifespan

buffet <- 162.5e9
(buffet/costs) * avg_US_lifespan

musk <- 334.5e9
(musk/costs) * avg_US_lifespan
