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
      id : 'starteventprimeiraprop',
      description : 'prop 1 primeiro evento',
      label : 'PrimeiroEventoJuridico',
      modelProperty : 'starteventprimeiraprop'
    }
    )),
    group.entries.push(entryFactory.textField(translate,
    {
      id : 'starteventsegundaprop',
      description : 'prop 2 primeiro evento',
      label : 'PrimeiroEventoJuridico',
      modelProperty : 'starteventsegundaprop'
    }
    ))
  }

  if (is(element, 'bpmn:Activity')) {
    group.entries.push(entryFactory.textField(translate,
      {
        id : 'activityprimeiraprop',
        description : 'prop 1 activity',
        label : 'ActivityJuridico',
        modelProperty : 'activityprimeiraprop'
      }
    )),
    group.entries.push(entryFactory.textField(translate,
      {
        id : 'activitysegundaprop',
        description : 'prop 2 activity',
        label : 'ActivityJuridico',
        modelProperty : 'activitysegundaprop'
      }
    ))
  }

}