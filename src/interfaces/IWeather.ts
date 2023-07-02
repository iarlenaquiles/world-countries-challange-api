interface Weather {
    name: string,
    region: string,
    country: string,
    temp_c: number,
    temp_f: number,
    text: string,
    icon: string,
    wind_dir: string,
    wind_mph: number,
    pressure_mb: number,
    pressure_in: number,
    humidity: number,
    cloud: number,
}

export { Weather }