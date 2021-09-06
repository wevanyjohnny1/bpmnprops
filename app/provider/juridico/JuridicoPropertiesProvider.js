// Require your custom property entries.
import juridicoTabOneProps from './parts/JuridicoTabOneProps';
import juridicoTabTwoProps from './parts/JuridicoTabTwoProps';

var LOW_PRIORITY = 500;

// Create the custom juridico tab.
// The properties are organized in groups.
function criarPrimeiraAbaJuridico(element, translate) {

  // Create a group called "JuridicoFirstGroup".
  var JuridicoFirstGroup = {
    id: 'primeira-tab',
    label: 'Primeira Tab',
    //entries recebe as props
    entries: []
  };

  // Add the props to the group.
  juridicoTabOneProps(JuridicoFirstGroup, element, translate);

  return [
    JuridicoFirstGroup
  ];
}

function criarSegundaAbaJuridico(element, translate) {

  // Create a group called "JuridicoFirstGroup".
  var JuridicoSecondGroup = {
    id: 'segunda-tab',
    label: 'Segunda Tab',
    //entries recebe as props
    entries: []
  };

  // Add the props to the group.
  juridicoTabTwoProps(JuridicoSecondGroup, element, translate);

  return [
    JuridicoSecondGroup
  ];
}

export default function JuridicoPropertiesProvider(propertiesPanel, translate) {

  // Register our custom magic properties provider.
  // Use a lower priority to ensure it is loaded after the basic BPMN properties.
  propertiesPanel.registerProvider(LOW_PRIORITY, this);

  this.getTabs = function(element) {

    return function(entries) {

      // Add the tab
      var juridicoFirstTab = {
        id: 'juridicofirsttab',
        label: 'tab 1',
        groups: criarPrimeiraAbaJuridico(element, translate)
      };

      var juridicoSecondTab = {
        id: 'juridicosecondtab',
        label: 'tab 2',
        groups: criarSegundaAbaJuridico(element, translate)
      }

      entries.push(juridicoFirstTab, juridicoSecondTab);
  
      // Show general + "magic" tab
      return entries;
    }
  };
}

JuridicoPropertiesProvider.$inject = [ 'propertiesPanel', 'translate' ]