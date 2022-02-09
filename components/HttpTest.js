import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';
/* https://blog.logrocket.com/using-axios-react-native-manage-api-requests/ */
class HttpTest extends Component {
  state = {
    data: '',
    parkings: '',
  };

  componentDidMount = () => {
    this.getMethod();
    this.getMethod_Local();
  };
  getMethod() {
    axios
      .get(
        'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=disponibilite-parkings&q=&facet=libelle&facet=ville&facet=etat&refine.ville=Lille&rows=1',
      )
      .then(res => {
        let rep = JSON.stringify(res.data);
        console.log('Rep = ' + rep);
        this.setState({
          data: res.data,
        });
      });
  }
  getMethod_Local() {
    axios.get('http://192.168.1.94:8080/parkings').then(res => {
      console.log('res(local) = ' + JSON.stringify(res));
      let rep = JSON.stringify(res.data);
      console.log('Rep(local) = ' + rep);
    });
  }
  async postMethod_Local() {
    try {
      const response = await axios.post('http://192.168.1.94:8080/addUser', {
        idUser: 0,
        email: 'jean@gmail.com',
        password: '0000',
      });
      if (response.status === 200) {
        console.log(` You have created: ${JSON.stringify(response.data)}`);
      } else {
        console.log('response status = ' + response.status);
      }
    } catch (error) {
      console.error('An error has occurred');
    }
  }
  async deleteMethod_Local() {
    try {
      const response = await axios.delete(
        'http://192.168.1.94:8080/user/1',
        {},
      );
      if (response.status === 204) {
        console.log(` You have deleted: ${JSON.stringify(response.data)}`);
      } else {
        console.error('Failed to delete resource');
      }
    } catch (error) {
      console.error('Failed to delete resource');
    }
  }
  async putMethod_Local() {
    const configurationObject = {
      url: 'http://192.168.1.94:8080/update',
      method: 'PUT',
      data: {
        idUser: 2,
        positionLongitudeUser: 51,
        positionLatitudeUser: 3,
      },
    };

    axios(configurationObject)
      .then(response => {
        if (response.status === 200) {
          console.log(` You have updated: ${JSON.stringify(response.data)}`);
        } else {
          console.error('An error has occurred');
        }
      })
      .catch(error => {
        console.error('An error has occurred');
      });
  }

  render() {
    return (
      <View>
        <Text>Informations Json : {this.state.data.nhits}</Text>
        <Button
          title="Send post request"
          onPress={async () => {
            await this.postMethod_Local();
          }}
        />
        <Button
          title="Send put request"
          onPress={async () => {
            await this.putMethod_Local();
          }}
        />
        <Button
          title="Send delete request"
          onPress={async () => {
            await this.deleteMethod_Local();
          }}
        />
      </View>
    );
  }
}
export default HttpTest;
