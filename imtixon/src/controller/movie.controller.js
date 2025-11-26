import Movie from '../schema/movie.schema.js';
import { ApiError } from '../utils/custom-error.js';
import { successRes } from '../utils/sucess-response.js';
import { errorRes } from '../utils/error-response.js';

class MovieController {
    async create(req, res) {
        try {
            const { title } = req.body;
            const takrorMovie = await Movie.findOne({ title });
            if (takrorMovie) {
                throw new ApiError('Movie title already exists', 409);
            }
            const newMovie = await Movie.create(req.body);
            return successRes(res, newMovie, 201);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findAll(_req, res) {
        try {
            const movies = await Movie.find();
            return successRes(res, movies);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findOne(req, res) {
        try {
            const movie = await Movie.findById(req.params?.id);
            if (!movie) {
                throw new ApiError('Movie not found', 404);
            }
            return successRes(res, movie);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async update(req, res) {
        try {
            const movie = await Movie.findById(req.params?.id);
            if (!movie) {
                throw new ApiError('Movie not found', 404);
            }
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return successRes(res, updatedMovie);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async remove(req, res) {
        try {
            const movie = await Movie.findById(req.params?.id);
            if (!movie) {
                throw new ApiError('Movie not found', 404);
            }
            await Movie.findByIdAndDelete(req.params.id);
            return successRes(res, {});
        } catch (error) {
            return errorRes(res, error);
        }
    }
}

export default new MovieController();

