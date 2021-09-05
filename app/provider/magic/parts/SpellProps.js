import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

export default function(group, element, translate) {

  // Only return an entry, if the currently selected
  // element is a start event.

  //bpmn:nomedoelemento
  //verificação do elemento, caso necessario
  // if (is(element, 'bpmn:Activity')) {
    //adiciona uma prop
    group.entries.push(entryFactory.textField(translate,
    {
      id : 'etapa',
      description : 'Em qual etapa se encontra',
      label : 'Etapa',
      modelProperty : 'etapa'
    },
  )),

  group.entries.push(entryFactory.textField(translate,
    {
      id : 'data',
      description : 'Data da etapa',
      label : 'Data',
      modelProperty : 'data'
    }
  ));
  // }
}