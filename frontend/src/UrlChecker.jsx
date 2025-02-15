import { useState } from 'react';

function LinkCheckPage() {
const [url, setUrl] = useState('');
const [result, setResult] = useState(null);

const checkLink = () => {
    // Mock logic to simulate link checking
    if (url.includes('safe')) {
    setResult('legitimate');
    } else {
    setResult('fraudulent');
    }
};

return (
    <div className="page-content">
    <h2>Enter a URL to Check Its Safety:</h2>
    <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="input-field"
    />
    <button onClick={checkLink} className="check-button">Check Link</button>

    {result === 'legitimate' && (
        <div className="result legitimate">✅ The link is legitimate</div>
    )}
    {result === 'fraudulent' && (
        <div className="result fraudulent">❌ The link is fraudulent</div>
    )}
    </div>
);
}

export default LinkCheckPage;
