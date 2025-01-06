using Architecture_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Architecture_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _courseRepository;

        public CourseController(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        [HttpGet]
        [Route("GetAllCourses")]
        public async Task<IActionResult> GetAllCourses()
        {
            try
            {
                var results = await _courseRepository.GetAllCourseAsync();
                return Ok(results);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error. Please contact support.");
            }
        }

        [HttpGet]
        [Route("GetCourseByID/{CourseId}")]
        public async Task<IActionResult> GetCourseByID(int CourseId)
        {
            return Ok(await _courseRepository.GetCourseAsync(CourseId));
        }

        [HttpPost]
        [Route("AddCourse")]
        public async Task<IActionResult> AddCourse(Course course)
        {
            var result = await _courseRepository.InsertCourseAsync(course);
            if (result.CourseId == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }

        [HttpPut]
        [Route("UpdateCourse")]
        public async Task<IActionResult> UpdateCourse(Course course)
        {
            await _courseRepository.UpdateCourseAsync(course);
            return Ok("Updated Successfully");
        }

        [HttpDelete]
        [Route("DeleteCourse/{CourseId}")]
        public async Task<IActionResult> DeleteCourse(int CourseId)
        {
            var result = await _courseRepository.DeleteCourseAsync(CourseId);
            if (result)
            {
                return Ok("Deleted Successfully");
            }
            return NotFound("Course not found");
        }

    }
}
