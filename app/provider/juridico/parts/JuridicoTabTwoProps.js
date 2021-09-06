import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

export default function(group, element, translate) {
  // Only return an entry, if the currently selected
  // element is a start event.
  //bpmn:nomedoelemento
  //verificação do elemento, caso necessario
  if (is(element, 'bpmn:StartEvent')) {
    //adiciona uma prop
    group.entries.push(entryFactory.textField(translate,
    {
      id : 'starteventprimeiraproptab2',
      description : 'prop 1 primeiro evento tab2',
      label : 'PrimeiroEventoJuridicoTab2',
      modelProperty : 'starteventprimeiraproptab2'
    }
    )),
    group.entries.push(entryFactory.textField(translate,
    {
      id : 'starteventsegundaproptab2',
      description : 'prop 2 primeiro evento tab2',
      label : 'PrimeiroEventoJuridicoTab2',
      modelProperty : 'starteventsegundaproptab2'
    }
    )),
    group.entries.push(entryFactory.checkbox(translate,
      {
        id : 'starteventterceiraproptab2',
        description : 'prop 3 primeiro evento tab2',
        label : 'PrimeiroEventoJuridicoTab2',
        modelProperty : 'starteventterceirproptab2'
      }
    ))
  }

  if (is(element, 'bpmn:Activity')) {
    group.entries.push(entryFactory.textField(translate,
      {
        id : 'activityprimeiraproptab2',
        description : 'prop 1 activity tab2',
        label : 'ActivityJuridicoTab2',
        modelProperty : 'activityprimeiraproptab2'
      }
    )),
    group.entries.push(entryFactory.textField(translate,
      {
        id : 'activitysegundaproptab2',
        description : 'prop 2 activity tab2',
        label : 'ActivityJuridicoTab2',
        modelProperty : 'activitysegundaproptab2'
      }
    ))
  }

}