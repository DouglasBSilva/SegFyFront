const names = [
    {number: 1000000000, name: 'b'},
    {number: 1000000, name: 'm'},
    {number: 1000, name: 'k'},
]

export default function formatStatistics(value): string{
    let result = value;
    names.every(
        type => {
            let found = type.number <= value;
            if(found){
                let plus = (value % type.number > 0) ? '+' : '';
                result = plus + Math.trunc(value / type.number) + type.name;

            } 
            return !found;
        } 
    )

    return result;

}