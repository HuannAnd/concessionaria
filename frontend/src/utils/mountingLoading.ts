
export const mountingLoading = async <
  TStrategy,
  TStrategyProps extends keyof TStrategy,
>(
  href: string,
  strategy: TStrategy,
  ...strategyParams: TStrategyProps
) => {
  await background.strategy.openAnimation(background.controls)
  await strategy.strategy.openAnimation(strategy.controls)

  


  document.body.style.cursor = "wait"
  router.push(href)
}