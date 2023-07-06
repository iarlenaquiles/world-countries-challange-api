import { Request, Response } from "express";
import request from 'request'

const API_KEY = `${process.env.API_KEY}`;

class WeatherController {
    public weather(req: Request, res: Response) {
        const { city } = req.query;

        const url = `${process.env.WEATHER_API_URL}/current.json?q=${city}&key=${API_KEY}`;

        request(url, (err: Error, _, body) => {
            if (err) {
                res.json({ weather: null, error: 'Error, please try again' })
            } else {
                const {
                    location: { name, region, country },
                    current: { temp_c, temp_f, condition: { text, icon },
                        wind_mph, wind_dir, pressure_mb, pressure_in, humidity, cloud }
                } = JSON.parse(body)

                return res.json([
                    { name: "Name", value: name },
                    { name: "Region", value: region },
                    { name: "Country", value: country },
                    { name: "Temperature in Celsius", value: temp_c },
                    { name: "Temperature in Fahrenheit", value: temp_f },
                    { name: "Condition", value: text },
                    { name: "Icon", value: icon },
                    { name: "Wind direction", value: wind_dir },
                    { name: "Wind MPH", value: wind_mph },
                    { name: "Pressure MB", value: pressure_mb },
                    { name: "Presure In", value: pressure_in },
                    { name: "Humidity", value: humidity },
                    { name: "Cloud", value: cloud },
                ])
            }
        });
    }
}

export const weatherController = new WeatherController();
