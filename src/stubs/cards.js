const cardData = [
  {
    id: 1,
    listID: 1,
    position: 0,
    title: 'Make the app themeable',
    labels: [
      { id: 1, title: 'Label 1', color: '#fb617f' },
      { id: 2, title: 'Label 2', color: '#4680ff' },
      { id: 3, title: 'Label 2', color: '#b1d077' }
    ],
    attachments: 3,
    comments: 2,
    description: true,
    users: ['NJ', 'SR', 'SL', 'LA']
  },
  {
    id: 5,
    listID: 2,
    position: 1,
    title: 'Integrate a state manager like mobx',
    labels: [
      { id: 3, title: 'Label 3', color: '#b1d077' }
    ],
    attachments: 1,
    users: ['AJ']
  },
  {
    id: 2,
    listID: 2,
    position: 3,
    title: 'Create a better version of Trello',
    description: true,
    users: ['SA']
  },
  {
    id: 3,
    listID: 1,
    position: 2,
    title: 'Create some stub data without using a state manager',
    labels: [
      { id: 1, title: 'Label 1', color: '#fb617f' }
    ]
  },
  {
    id: 4,
    listID: 1,
    position: 1,
    title: 'Get a good start on a design',
    labels: [
      { id: 3, title: 'Label 3', color: '#b1d077' },
      { id: 2, title: 'Label 2', color: '#4680ff' }
    ]
  },
  {
    id: 6,
    listID: 4,
    position: 15,
    title: 'Get a react foundational app under way'
  }
];

export default cardData;
