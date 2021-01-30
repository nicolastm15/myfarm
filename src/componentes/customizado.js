import React from 'react';
import { Item, Input, Icon, DatePicker, Toast, Text } from 'native-base';
import TextField from './TextField';
import DateField from './DateField';

//TODO IMPLEMENTAR CHECAGEM DE MINCHARACTERS
//cada campo do formulario tem esse formato (Texto) abaixo:
export class Texto extends React.Component {
  render() {
    if (this.props.tipo != 'data') {
      return (
        <Item
          style={{
            marginBottom: 12,
            flex: 1,
            minHeight: this.props.tamanho,
          }}
        >
          <Icon
            active
            name={this.props.icone}
            style={{ color: this.props.cor }}
          />
          <Input
            style={{
              height: this.props.tamanho,
              color: this.props.cor,
            }}
            keyboardType={this.props.tipo}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.corP}
            returnKeyType={'next'}
            secureTextEntry={this.props.senha}
            {...this.props}
          >
            {this.props.texto}
          </Input>
        </Item>
      );
    } else {
      return (
        <>
          <Item
            style={{
              marginBottom: 12,
              flex: 1,
              minHeight: this.props.tamanho,
            }}
          >
            <DatePicker
              defaultDate={new Date()}
              maximumDate={new Date()}
              locale='pt'
              modalTransparent={false}
              animationType='fade'
              androidMode='spinner'
              placeHolderText={this.props.placeholder}
              textStyle={{ color: '#000' }}
              placeHolderTextStyle={{ color: this.props.corP }}
              onDateChange={this.props.onDateChange}
            />
            <Input
              placeholder={
                this.props.texto
                  ? '(atual: ' + new Date(this.props.texto).toDateString() + ')'
                  : ''
              }
              style={{ paddingLeft: 10 }}
              disabled
            ></Input>
          </Item>
        </>
      );
    }
  }
}

export class Formulario extends React.Component {
  //cria formulario com os campos passados por props
  constructor(props) {
    super(props);

    let tmp = {};
    for (var i = 0; i < props.campos.length; i++) {
      tmp[props.campos[i].nome] = '';
    }

    tmp.campos = props.campos;
    this.state = tmp;
  }

  //retorna um obejto tmp com os mesmos campos do formulario preenchido
  getValores = () => {
    var tmp = {};
    for (var i in this.state) {
      if (i != 'campos') tmp[i] = this.state[i];
    }
    return tmp;
  };

  //coloca determinado valor em determinado campo
  setValor = (chave, valor) => {
    this.setState({ [chave]: valor });
  };

  //verifica se todos os campos obrigatorios foram preenchidos
  verificaRequisitos = () => {
    var erro = 0;
    for (var i in this.state.campos) {
      if (
        this.state.campos[i]['obrigatorio'] &&
        this.state[this.state.campos[i]['nome']] == ''
      ) {
        erro++;
        console.warn('Preencha todos os campos obrigatórios');
      }
    }
    return erro == 0;
  };

  //renderiza um formulario com os campos passados por props
  render() {
    return this.state.campos.map((campo) => {
      if (campo.tipo != 'data') {
        return (
          <TextField
            key={campo.nome}
            icone={campo.icone}
            tamanho={this.props.tamanho}
            placeholder={campo.placeholder}
            cor={this.props.cor}
            corP={this.props.corP}
            tipo={campo.tipo}
            senha={campo.senha}
            texto={this.state[campo.nome] || campo.valor}
            onChangeText={(txt) => this.setState({ [campo.nome]: txt })}
          />
        );
      } else {
        return (
          <DateField
            key={campo.nome}
            icone={campo.icone}
            tamanho={this.props.tamanho}
            placeholder={campo.placeholder}
            cor={this.props.cor}
            corP={this.props.corP}
            data={this.state[campo.nome] || campo.valor}
            onDateChange={(txt) => this.setState({ [campo.nome]: txt })}
          />
        );
      }
    });
  }
}
