const knex = require("../database/knex")

class MovieNotesController {
  async create(request, response) {
    const { title, description, rating , tags} = request.body
    const { user_id } = request.params

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    })

    
    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("movie_tags").insert(tagsInsert)

    response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const note = await knex("movie_notes").where({ id }).first()
    const tags = await knex("movie_tags").where({ note_id: id }).orderBy("name")

    return response.json({
      ...note,
      tags
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex("movie_notes").where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { title, user_id, movie_tags } = request.query

    let notes

    if (movie_tags) {
      const filterTags = movie_tags.split(',').map(tag => tag.trim())

      notes = await knex("movie_tags")
        .whereIn("name", filterTags)
        
    } else {
      notes = await knex("movie_notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title")
    }

    return response.json(movie_notes)
  }

  
}

module.exports = MovieNotesController