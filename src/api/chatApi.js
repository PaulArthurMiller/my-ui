export const getAssistantResponse = async (message) => {
  try {
    const response = await fetch('http://localhost:8000/api/generate-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching assistant response:', error);
    return { response: 'Sorry, I could not process your request.' };
  }
};
