import { Form } from '../../../../src';

const fields = {
  state: {
    label: 'State',
    value: 'USA',
    fields: {
      city: {
        label: 'City',
        value: 'New York',
        fields: {
          places: {
            label: 'NY Places',
            fields: {
              centralPark: {
                label: 'Central Park',
                value: true,
              },
              statueOfLiberty: {
                label: 'Statue of Liberty',
                value: false,
              },
              empireStateBuilding: {
                label: 'Empire State Building',
                value: true,
              },
              brooklynBridge: {
                label: 'Brooklyn Bridge',
                value: true,
              },
            },
          },
        },
      },
    },
  },
};


class NewForm extends Form {

  hooks() {
    return {
      onInit(form) {
        form.$('state.city').clear(true);
      },
    };
  }
}


export default new NewForm({ fields }, { name: 'Nested-D' });
