const mongoose = require('mongoose');

//mongoose.connect('mongodb://192.168.0.36:27017/playground')
//mongoose.connect('mongodb+srv://tomio:98819881@cluster0-lcupc.mongodb.net/vidly?retryWrites=false&w=majority')
mongoose.connect('mongodb+srv://tomio:98819881@cluster0-lcupc.mongodb.net/playground?retryWrites=false&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

    
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now},
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
      // .find({ author: 'Mosh', isPublished: true})
      // .find()
      // .or([{ author: 'Mosh'}, {isPublished: true}])
      // .and([{ author: 'Mosh'}, {isPublished: true}])
      // .find({ prince: { $gte: 10, $lte: 20 }})
      // .find({ prince: { $in: [10, 15, 20] }})
      // .find({ author: /^mosh/ })
      // .find({ author: /Hamedani$/ })
      .find({ author: /.*Mosh.*/ })
      // .skip((pageNumber - 1) * pageSize)
      // .limit(pageSize)
      .limit(10)
      .sort({ name: 1 })
      // .select({ name: 1, tags: 1 });
      .count();
  console.log(courses);
}

async function createCourse() {
  const course = new Course({
      name: 'Angular Course',
      author: 'Mosh',
      tags: ['angular', 'backend'],
      // isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

async function run() {
  await createCourse();
  console.log('Done1');
  await getCourses();
  console.log('Done2');
}

run();