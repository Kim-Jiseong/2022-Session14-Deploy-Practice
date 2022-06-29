from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import json
from .models import Todo
# Create your views here.
def home(request):
    # todolist = Todo.objects.all()
    # todolist = Todo.objects.order_by('-id')
    # context = {'todolist': todolist}
    # return render(request, 'main/home.html', context)
    return render(request, 'main/home.html')




@csrf_exempt
def get_todo_notFinished(request):
    todolist = list(Todo.objects.filter(done = False).order_by('-id').values()) #done == False인 todo를 찾고 id의 역순으로 정렬, json 변환 시 에러 피하기 위해 values() 사용 
    print(todolist)
    context = {'todolist': todolist}
    print(context)
    return HttpResponse(json.dumps(context, default=str)) #datetime은 그냥 넘기면 오류 발생하므로 string으로 변경

@csrf_exempt
def get_todo_finished(request):
    print('오류방지용')
    # 여기부터 직접 작성하세요

@csrf_exempt
def new_todo(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        new_todo=Todo.objects.create(
            content=data["content"],
            done=data["done"],
        )
        context = {
            'result': data,
        }
        print(new_todo)
        return HttpResponse(json.dumps(context))

@csrf_exempt
def delete_todo(request):
    data = json.loads(request.body)
    context = {
        'result': 'not found'
    }
    #여기부터 직접 작성하세요. context는 에러 확인용입니다. 
    # 조회한 todo가 존재하는지 확인하고, 존재한다면 context의 result를 'done'으로 바꾸고 존재하지 않으면(에러나면) 그대로 반환해주세요. todo 삭제 후 context를 HttpResponse로 반환하시면 됩니다. 
    # Hint: request로 id를 받았습니다

@csrf_exempt
def check(request):
    data = json.loads(request.body)
    context = {
        'result': 'not found'
    }
    #여기부터 직접 작성하세요. context는 에러 확인용입니다. 
    # 조회한 todo가 존재하는지 확인하고, 존재한다면 context의 result를 'done'으로 바꾸고 존재하지 않으면(에러나면) 그대로 반환해주세요. todo 삭제 후 context를 HttpResponse로 반환하시면 됩니다. 
    # Hint: request로 id와 done을 받았고, done은 항상 현재 done의 반대입니다.
