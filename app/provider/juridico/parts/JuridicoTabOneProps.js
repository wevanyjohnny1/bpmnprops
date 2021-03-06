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
    )),
    group.entries.push(entryFactory.checkbox(translate,
      {
        id : 'starteventterceiraprop',
        description : 'prop 3 primeiro evento',
        label : 'PrimeiroEventoJuridico',
        modelProperty : 'starteventterceirprop'
      }
    )),
    group.entries.push(entryFactory.selectBox(translate,
      {
        id : 'starteventterceiraprop',
        description : 'prop 3 primeiro evento',
        label : 'PrimeiroEventoJuridico',
        selectOptions: [
          { name: 'evento juridico 1', value: 'eventojuridico1'},
          { name: 'evento juridico 2', value: 'eventojuridico2'}
        ],
        modelProperty : 'starteventterceirprop'
      }
    ))
    // group.entries.push(entryFactory.toggleSwitch(translate,
    //   {
    //     id : 'starteventterceiraprop',
    //     description : 'prop 3 primeiro evento',
    //     label : 'PrimeiroEventoJuridico',
    //     modelProperty : 'starteventterceirprop'
    //   }
    // ))
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