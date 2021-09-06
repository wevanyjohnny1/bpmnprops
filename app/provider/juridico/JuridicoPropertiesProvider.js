// Require your custom property entries.
import juridicoProps from './parts/JuridicoProps';

var LOW_PRIORITY = 500;

// Create the custom juridico tab.
// The properties are organized in groups.
function criarAbaJuridico(element, translate) {

  // Create a group called "JuridicoGroup".
  var JuridicoGroup = {
    id: 'juridico-tab',
    label: 'Teste Tab',
    entries: []
  };

  // Add the spell props to the black magic group.
  juridicoProps(JuridicoGroup, element, translate);

  return [
    JuridicoGroup
  ];
}

export default function JuridicoPropertiesProvider(propertiesPanel, translate) {

  // Register our custom magic properties provider.
  // Use a lower priority to ensure it is loaded after the basic BPMN properties.
  propertiesPanel.registerProvider(LOW_PRIORITY, this);

  this.getTabs = function(element) {

    return function(entries) {

      // Add the "magic" tab
      var juridicoTab = {
        id: 'juridicotab',
        label: 'Tab',
        groups: criarAbaJuridico(element, translate)
      };

      entries.push(juridicoTab);
  
      // Show general + "magic" tab
      return entries;
    }
  };
}

JuridicoPropertiesProvider.$inject = [ 'propertiesPanel', 'translate' ]