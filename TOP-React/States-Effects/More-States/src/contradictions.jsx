import { useState } from 'react';

/* NB to avoid contradictions in state */

export default function FeedbackForm() {
  const [text, setText] = useState('');
  /* Instead of this */
  // const [isSending, setIsSending] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  /* Do this */
  const [status, setStatus] = useState('typing')

/*   async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  } */

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent')
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}


