# Project Starliner

platform for teacher to create interactive content for student and let student study with great progression

## User Requirement
1. Teacher can create course, get course, edit course, delete course

    - Course
        - course_id
        - description
        - require_course_ids : []
        - name

    - chapter
        - chapter_id
        - name
        - description
        - prev_chapter_id

    - Submission
        - submission_id
        - course_id
        - chapter_id

