from p_personal_backend.database.models import Projects

class ProjectUtils:

    @staticmethod
    def validate_projects(projects : Projects):

        if not projects.title:
            raise Exception('Title should not be null!')

        if not projects.status:
            raise Exception('Status should not be null!')

        if not projects.description:
            raise Exception('Description should not be null!')

        if not projects.date_update:
            raise Exception('Date Update should not be null!')

        if not projects.git_url:
            raise Exception('Github URL should not be null!')