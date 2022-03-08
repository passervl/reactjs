export default function UseLocalStringDt(key, init) {
    const [value, setValue] = useState(localStorage.getItem(key) || init);
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
    return [value, setValue]
}