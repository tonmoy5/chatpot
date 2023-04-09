const userData = {
  userId: 1,
  userName: "John Doe",
  userAvatar: "https://via.placeholder.com/150",
  friends: [
    {
      id: 1,
      name: "Alice",
      avatar: "https://via.placeholder.com/150",
      status: true,
      userName: "@john.doe",
    },
    {
      id: 2,
      name: "Bob",
      avatar: "https://via.placeholder.com/150",
      status: false,
      userName: "@john.doe",
    },
    {
      id: 3,
      name: "Charlie",
      avatar: "https://via.placeholder.com/150",
      status: true,
      userName: "@john.doe",
    },
  ],

  // chatList: [
  //   {
  //     id: 1,
  //     friend: {
  //       id: 1,
  //       name: "Alice",
  //       avatar: "https://via.placeholder.com/150",
  //       status: true,
  //       userName: "@Alice",
  //     },
  //     allChat:{
  //       sender:{
  //         me:[],
  //         friend:[]
  //       }
  //     },
  //     lastMessage: "Hello",
  //     unseenMessages: 2,
  //     time: "10:00 AM",
  //   },
  //   {
  //     id: 2,
  //     friend: {
  //       id: 2,
  //       name: "Bob",
  //       avatar: "https://via.placeholder.com/150",
  //       status: false,
  //       userName: "@Bob",
  //     },
  //     lastMessage: "How are you?",
  //     unseenMessages: 0,
  //     time: "09:00 AM",
  //   },
  //   {
  //     id: 3,
  //     friend: {
  //       id: 3,
  //       name: "Charlie",
  //       avatar: "https://via.placeholder.com/150",
  //       status: true,
  //       userName: "@Charlie",
  //     },
  //     lastMessage: "What are you up to?",
  //     unseenMessages: 1,
  //     time: "08:00 AM",
  //   },
  // ],

  chatList: [
    {
      id: 1,
      friend: {
        id: 1,
        name: "Alice",
        avatar: "https://via.placeholder.com/150",
        status: true,
        userName: "@Alice",
      },
      messages: {
        sender: {
          me: [
            {
              id: 1,
              text: "Hey Alice, how's it going?",
              timestamp: "2023-04-08T11:45:00.000Z",
            },
            {
              id: 2,
              text: "Did you watch that new movie yet?",
              timestamp: "2023-04-08T11:46:00.000Z",
            },
            {
              id: 3,
              text: "It's really good!",
              timestamp: "2023-04-08T11:47:00.000Z",
            },
            {
              id: 4,
              text: "welcome",
              timestamp: "2023-04-08T11:51:00.000Z",
            },

          ],
          friend: [
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 5,
              text: "Hey there! Yeah, I watched it last night",
              timestamp: "2023-04-08T11:48:00.000Z",
            },
            {
              id: 6,
              text: "I agree, it was awesome!",
              timestamp: "2023-04-08T11:49:00.000Z",
            },
            {
              id: 7,
              text: "thanks",
              timestamp: "2023-04-08T11:50:00.000Z",
            },
          ],
        },
      },
      lastMessage: "It's really good!",
      unseenMessages: 0,
      time: "11:47 AM",
    },
    {
      id: 2,
      friend: {
        id: 2,
        name: "Bob",
        avatar: "https://via.placeholder.com/150",
        status: false,
        userName: "@Bob",
      },
      messages: {
        sender: {
          me: [],
          friend: [],
        },
      },
      lastMessage: "How are you?",
      unseenMessages: 0,
      time: "09:00 AM",
    },
    {
      id: 3,
      friend: {
        id: 3,
        name: "Charlie",
        avatar: "https://via.placeholder.com/150",
        status: true,
        userName: "@Charlie",
      },
      messages: {
        sender: {
          me: [
            {
              id: 6,
              text: "Hey Charlie, how's your day going?",
              timestamp: "2023-04-08T10:30:00.000Z",
            },
          ],
          friend: [
            {
              id: 7,
              text: "Not too bad, thanks for asking!",
              timestamp: "2023-04-08T10:31:00.000Z",
            },
          ],
        },
      },
      lastMessage: "Not too bad, thanks for asking!",
      unseenMessages: 0,
      time: "10:31 AM",
    },
  ],


  callList: [
    {
      id: 1,
      friend: {
        id: 1,
        name: "Alice",
        avatar: "https://via.placeholder.com/150",
        status: true,
        userName: "@alice",
      },
      _type: "missed",
      time: "10:00 AM",
      userName: "@john.doe",
    },
    {
      id: 2,
      friend: {
        id: 2,
        name: "Bob",
        avatar: "https://via.placeholder.com/150",
        status: false,
        userName: "@bob",
      },
      _type: "received",
      time: "11:30 AM",
      userName: "@john.doe",
      callDuration: "10:30",
    },
    {
      id: 3,
      friend: {
        id: 3,
        name: "Charlie",
        avatar: "https://via.placeholder.com/150",
        status: true,
        userName: "@charlie",
      },
      _type: "dialed",
      time: "12:00 PM",
      userName: "@john.doe",
      callDuration: "05:15",
    },
  ],
};

export default userData;
