import "@babel/polyfill";

import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';
import data from './data.json';

const headings = ['When', 'Who', 'description'];

render(
    <App data={data} title='OpenLibrary API' headings={headings} />,
    document.getElementById('app')
)