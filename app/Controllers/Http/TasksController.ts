import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index({ view }: HttpContextContract) {
    const tasks = await Task.all()
    return view.render('tasks.index', { tasks })
  }

  public async show({ params, view }: HttpContextContract) {
    const task = await Task.find(params.id)
    return view.render('tasks.show', { task })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('tasks.create')
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['title'])
    await Task.create(data)
    response.redirect().toRoute('tasks.index')
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
