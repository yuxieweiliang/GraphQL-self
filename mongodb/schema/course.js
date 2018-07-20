import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


/**
 * 课程
 */
const CourseSchema = new Schema({
  title: String,  // 名称
  desc: String,   // 描述
  page: Number,   // 页码
  author: String, // 作者
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

CourseSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }

  next()
})

mongoose.model('Course', CourseSchema)