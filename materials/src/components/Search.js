
export default function Search(props) {
    // arr: array of data that contain the searching query.
    const { arr, query } = props;
    return arr.filter(ele => ele.toLowercase().indexOf(query.toLowercase()) !== -1)
}


// console.log(Search(arr, query));