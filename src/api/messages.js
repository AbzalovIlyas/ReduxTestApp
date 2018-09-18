export const storedMessages = async (stored) => {
  try {
    const storedMessages = [];

    if (stored) {
      storedMessages.push({
        _id: 1,
        text: 'Песен еще ненаписанных, сколько? Скажи, кукушка, пропой. В городе мне жить или на выселках, Камнем лежать или гореть звездой? Звездой. Солнце мое - взгляни на меня.',
        createdAt: new Date,
        user: {},
        image: '',
      });
    }

    return {
      success: true,
      messages: storedMessages
    };
  } catch (err) {
    console.log(err);
  }
};
