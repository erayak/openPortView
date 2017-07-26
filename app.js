#!/usr/bin/env node

// Library
const prompt = require('prompt');
const portscanner = require('portscanner');

// 
// Start the prompt 
// 
prompt.start();

// Start App
console.log("Ports are typed (80,3000,1000 etc.) ");

prompt.get(["port","url"], ( err, result ) => {

        portscanner.findAPortInUse(result.port.split(','), `${result.url}`, (error, port) => {

            if( port === false )
                console.log("Ports Off");
            else
                console.log('Open Port => ' + port);

        });    

});