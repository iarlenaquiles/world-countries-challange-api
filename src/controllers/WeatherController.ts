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

                return res.json({
                    name, region, country,
                    temp_c, temp_f, text, icon, wind_dir,
                    wind_mph, pressure_mb, pressure_in, humidity, cloud
                })
            }
        });
    }
}

export const weatherController = new WeatherController();
