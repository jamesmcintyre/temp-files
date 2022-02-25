const setExperimentFlow = async () => {
  const getExperimentId = async (expName) => {
    const exps = window.AppState.experiments.nameMapId;
    if (window.AppState.experiments.nameMapId) {
      const expId = exps[expName];
      if (expId) {
        return expId;
      } else {
        await alert('Experiment name not found:', expName);
      }
    }
  };
  const setExperimentState = async (experimentName, experimentVariant = 'enabled') => {
    try {
      console.log('exp data:', experimentName + experimentVariant)
      const experimentId = await getExperimentId(experimentName);
      await window.Dispatchers.experiments.__setExperimentBucketedState(experimentName, experimentId, experimentVariant);
      await alert('Experiment should be set!');
    } catch (err) {
      console.warn(err)
      await alert(JSON.stringify(err, Object.getOwnPropertyNames(err)));
    }
  }
  const experimentNameFromInput = await prompt("Experiment Name:");
  if (!experimentNameFromInput) return;
  const experimentVariationFromInput = await prompt('Experiment Variation:', 'enabled');
  if (!experimentVariationFromInput) return;
  await setExperimentState(experimentNameFromInput, experimentVariationFromInput);
  const runAgain = confirm('Do you want to set another experiment?');
  if (runAgain) {
    setExperimentFlow();
  }
};
setExperimentFlow();