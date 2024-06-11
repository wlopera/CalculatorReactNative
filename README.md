## REACT NATIVE
Framework de JavaScript que permite crear aplicaciones nativas para IOS y Android. Esta basada en React, librarías de JavaScript creadas por Facebook que permite construir interfaces de usuario
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/03ea17a0-4a36-463c-a95b-19e25d17b1e8)

#### Librería:
Colección de código ya escrito que permite ser rehusado para simplificar y acelerar el proceso de construcción de código. Permite de funciones o métodos que permiten hacer el trabajo mas rápido y eficiente.
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/44dd8975-3de6-488d-b152-c46d57986e83)

### Framework:
Herramientas o códigos pre escrito funciones , métodos y librerías que permite escribir aplicaciones mas rápido.
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/4e3fd2d2-9bcc-4edd-887f-6ea7fa28b350)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/e1babbd4-9e70-4e90-b5e0-9716b4ab55a1)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/85adef5f-4bd0-4730-8612-3afddf484946)

Ejemplo de limitaciones IOS puede tener algunas características que no se pueden con Android. (Aqui podrias requerir código nativo)
Podrias sentir que las APP nativas son un poco diferentes a las de React Native  (por el punto anterior, por ejemplo)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/024c6f09-12a6-47ce-a7da-770859dc9b9f)

##### Proyecto de Calculadora en React Native: modelos
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/beb5995d-d78a-464d-aafd-e8ed2b6c041c)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/3f872c4c-50ca-484c-ad03-0d900d2efd8e)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/d57c5577-fc32-4c76-96f9-4481f61adcfe)

###### Creamos un proyecto React Native con TypeScript básico
	_> npx react-native@latest init CalculatorReactNative
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/c2a7c3df-120d-4e76-af68-4149be1de75c)


######Limpiar cache y levantar
...\CalculatorReactNative>  cd android
..\CalculatorReactNative\android>gradlew clean
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/33af8824-723e-402c-9296-da6ac0d648b1)

\CalculatorReactNative>npx react-native start --reset-cache
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/391d0578-8e8f-4e22-974d-ed8645d7a5f3)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/4b988fc9-2cbf-4cca-8571-8d31b8b3489c)

###### Abrir en VSCODE, limpiar e iniciar  programa
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/8a911721-44df-4dc6-81a2-dc0e7d14de83)

###### Código:

Componente principal Calculator.jsx donde se despliega la APP y se realiza los cálculos con el apoyo de utilitarios y tipos.
Se crearon cuatro componentes
CurrentDisplay: Texto de información actual para los cálculos
ResultDisplay:Texto de información de entrada de data y resultados
BottonMap: Componente que permite recorrer una matriz con los datos de los botones y sus caracteristicas 
BottonItem: Componente que despliega los botones en la vista final

###### Manejo de tipos:
```
/* eslint-disable prettier/prettier */
export type BotonDataProps = {
  backgroundColorNumber: string;
  value: string;
};
export type ButtonActionsProps = {
  press: (text: string) => void;
};
export type BotonProps = BotonDataProps & ButtonActionsProps;
```

###### Manejo de estilos de la vista

####### Pantalla principal: Se divide en dos parte superior e inferior
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f0ebeb',
  },
  titleContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, fontWeight: '900', color: '#FFF'},
  northContainer: {flex: 1, backgroundColor: '#000'},
  sourthContainer: {
    flex: 2,
    backgroundColor: '#202020',
  },
});
```

####### Botones: Se define un tamaño y separación y borde redondeado por botón
```
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: 10,
  },
  botonContainer: {
    borderRadius: 20,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  number: {
    color: '#d8d3d3',
    fontSize: 26,
  },
});
```

####### Textos de información:  SE alinea en la parte inferior y a la derecha de su posición
```
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'},
  text: {fontSize: 50, color: '#FFF'},
});
```

##### Salida: Cálculos y validaciones
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/3114db30-9271-4e7b-97d8-aa7c347582f2)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/783c5226-62c5-4e04-b5b9-5c35ba2a828f)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/119a1fb8-468b-4c2d-9ba2-68c50d78ed00)
![image](https://github.com/wlopera/CalculatorReactNative/assets/7141537/b87852be-4792-4f33-a7c3-fffdac3fc670)

       

