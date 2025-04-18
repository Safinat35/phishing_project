import { useState } from 'react';
import { classifyText } from './api/classify';
import logo from './assets/logo_nabih.png'; // Adjust path as needed

function LinkCheckPage() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkLink = async () => {
    setError(null);
    setResult(null);
    setLoading(true);

    try {
        const response = await classifyText(url);

        if (!response || !response.label || response.confidence === undefined) {
        throw new Error("Invalid response format");
        }

      const confidence = Math.round(response.confidence * 100); // to % format
        let message = '';
        let status = '';

        if (confidence >= 90 && response.label === 'safe') {
        message = `✅ The link is safe (${confidence}% confidence)`;
        status = 'legitimate';
        } else if (confidence >= 90 && response.label === 'phishing') {
        message = `❌ The link is likely phishing (${confidence}% confidence)`;
        status = 'fraudulent';
        } else {
        message = `⚠️ The link looks suspicious (${confidence}% confidence)`;
        status = 'suspicious';
        }

        setResult({ status, message });
    } catch (err) {
        console.error(err);
        setError('Something went wrong. Please try again.');
    } finally {
        setLoading(false);
    }
    };

    return (
    <div className="page-content">

        {/* Logo */}
        <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo-image" />
        </div>
        
        <h2>Enter a URL to Check Its Safety:</h2>

        <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="input-field"
        />

        <button onClick={checkLink} className="check-button" disabled={loading}>
        {loading ? 'Checking...' : 'Check Link'}
        </button>

        {error && (
        <div className="result error">⚠️ {error}</div>
        )}

        {result && (
        <div className={`result ${result.status}`}>{result.message}</div>
        )}
    </div>
    );
}

export default LinkCheckPage;
