export interface HardDrive
{
    manifacturer: string, 
    modelNumber: string,
    productFamily: string,
    capacity: number,
    speed: number,
    used: boolean
}

export function HardDrive(prop: HardDrive)
{
    return <tr>
        <td>{prop.manifacturer}</td>
        <td>{prop.modelNumber}</td>
        <td>{prop.productFamily}</td>
        <td>{prop.capacity}</td>
        <td>{prop.speed}</td>
        <td>{prop.used}</td>
    </tr>
}