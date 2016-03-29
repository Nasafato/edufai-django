from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class ImagePickerView(TemplateView):
	template_name = "imagepicker/imagepickerview.tpl.html"
