import json
from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.serializers.json import DjangoJSONEncoder



# Create your views here.
class ImagePickerView(TemplateView):
	template_name = "imagepicker/imagepickerview.tpl.html"

	def get_context_data(self, **kwargs):
		context = super(ImagePickerView, self).get_context_data(**kwargs)
		data = {}
		data['userData'] = {
			'name': 'Alan Gou',
			'username': 'nasafato',
			'imageURL': 'http://placehold.it/50x50'
		}
		data['imageData'] = {
			'imageURL': 'http://placehold.it/400x400'
		}
		context['data'] = json.dumps(data, cls=DjangoJSONEncoder)

		return context


