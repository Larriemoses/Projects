from django.shortcuts import render

from .models import Student

def Student_list(request):
    students = Student.objects.all()
    return render(request, 'students/student_list.html', {'student' : students
                                                          })


# Create your views here.
