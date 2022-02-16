import {  Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';;

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Felipe Pardim",
        duration: 12
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Diego Fernandes",
    });

    return response.send();
}