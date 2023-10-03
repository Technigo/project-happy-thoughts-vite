export const OldHappyThoughts = () => {
  const [RecentThougths, setRecentThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => setRecentThoughts(json.results));
  }, []);

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={json.message}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export const RecentThoughts = () => {
  <div>
    <img
      src="/src/assets/examples/finished-example.png"
      alt="Finished Project Example"
    ></img>
  </div>;
};
