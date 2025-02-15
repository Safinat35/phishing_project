function WelcomePage({ onStart }) {
    return (
    <div className="page-content">
        <h1>Welcome to NABIH – Your First Line of Defense Against Malicious Links!</h1>
        <p>
        Our tool provides instant feedback on the safety of any URL. With advanced fraud detection algorithms, we help you avoid phishing, malware, and other online scams.
        </p>
        <button onClick={onStart} className="start-button">Get Started</button>
    </div>
    );
}

export default WelcomePage;
