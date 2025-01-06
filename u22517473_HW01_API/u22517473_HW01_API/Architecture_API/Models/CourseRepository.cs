using Microsoft.EntityFrameworkCore;
using System;

namespace Architecture_API.Models
{
    public class CourseRepository : ICourseRepository
    {
        private readonly AppDbContext _appDbContext;

        public CourseRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async Task<Course[]> GetAllCourseAsync()
        {
            IQueryable<Course> query = _appDbContext.Courses;
            return await query.ToArrayAsync();
        }

        public async Task<Course> GetCourseAsync(int CourseId)
        {
            return await _appDbContext.Courses.FindAsync(CourseId);
        }

        public async Task<Course> InsertCourseAsync(Course course)
        {
            _appDbContext.Courses.Add(course);
            await _appDbContext.SaveChangesAsync();
            return course;
        }

        public async Task<Course> UpdateCourseAsync(Course course)
        {
            _appDbContext.Entry(course).State = EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
            return course;
        }

        public async Task<bool> DeleteCourseAsync(int CourseId) 
        {
            var course = await _appDbContext.Courses.FindAsync(CourseId);
            if (course != null)
            {
                _appDbContext.Courses.Remove(course);
                await _appDbContext.SaveChangesAsync();
                return true;
            }
            return false;
        }

    }
}
