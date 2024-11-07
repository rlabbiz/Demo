# Generated by Django 4.2.15 on 2024-11-07 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_alter_friendrequests_request_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friendrequests',
            name='request_status',
            field=models.CharField(choices=[('P', 'P'), ('D', 'D'), ('U', 'U'), ('A', 'A')], default='Pending', max_length=20),
        ),
    ]
