/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const getDataUrl = (url) => {

    return new Promise((resolve, reject) => {
        
        fetch(url, {
            method: 'GET',            
        })
        .then(function (response) {
    
            return response.json();
        })
        .then((result) => {

            resolve(result);                     
        })
        .catch((result) => {
    
            console.log('ERRO GET DATA', result);
            resolve(false);
        });  
    });                   
};

/**
 * Armazena os dados dentro do dispositivo.
 * @param {Chave que indentifica o registro} key 
 * @param {Valor a ser armazenado} value 
 */
export function storeData(key, value) {

    return new Promise((resolve, reject) => {

        try {

            AsyncStorage.setItem(key, value)

            resolve(true);
        }
        catch (err) {
                
            console.log(err);
            resolve(false);
        }
    
    });
}

/**
 * Recupera o dados gravado no dispositivo
 * @param {Chave usada para poder recuperar o dado armazenado no dispositivo} key 
 */
export async function getData(key) {

    return new Promise((resolve, reject) => {

        try {
            
            const value = AsyncStorage.getItem(key);
    
            resolve(value);
        }
        catch (err) {
    
            resolve(false);
            console.log(err);
        }    
    })

}

/**
 * Função para verificar se a internet esta conectada ou não.
 * Esta função foi criada pelo motivo que após a atualização do iOS para 12.1.3, o sistema começou a dar uma mensagem
 * de acesso negado, na hora de verificar se o celular esta conectado ou não.
 */
export async function checkConnection() {

    try {

        return new Promise((resolve, reject) => {

            fetch('https://www.frogtest.com.br/checkconnection.php', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },            
            })
            .then(function (response) {
    
                return response.json();
            })
            .then((result) => {
    
                if (result == 1) {

                    resolve(1);
                }
                else {

                    resolve(0);
                }                
            })
            .catch((result) => {
    
                resolve(0);
            });        
        });        

    }
    catch (err) {

        resolve(0);
    }
}

