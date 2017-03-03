import React from 'react';
import styles from './App.scss';
import IssueForm from './IssueForm.js';
import IssueList from './IssueList.js';

const App = () => (
  <div className={styles}>
    <h1>main</h1>
    <IssueForm />
    <IssueList />
  </div>
)

export default App
