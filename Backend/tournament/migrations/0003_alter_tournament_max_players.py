# Generated by Django 5.1.1 on 2024-10-18 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tournament', '0002_tournament_current_round_alter_player_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tournament',
            name='max_players',
            field=models.IntegerField(default=9),
        ),
    ]