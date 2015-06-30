from flask_wtf import Form
from wtforms import StringField, validators, TextAreaField


class BaseForm(Form):
    DATA_REQUIRED = 'Ce champ est obligatoire.'
    EMAIL = 'Adresse courriel invalide.'


class TrackedDownloadForm(BaseForm):

    first_name = StringField('Prénom',
                             [validators.DataRequired(BaseForm.DATA_REQUIRED)])
    last_name = StringField('Nom',
                            [validators.DataRequired(BaseForm.DATA_REQUIRED)])
    email = StringField('Email',
                        [validators.DataRequired(BaseForm.DATA_REQUIRED),
                         validators.Email(BaseForm.EMAIL)])
    company = StringField('Société')


class ReportForm(BaseForm):
    email = StringField('Votre email',
                        [validators.DataRequired(BaseForm.DATA_REQUIRED),
                         validators.Email(BaseForm.EMAIL)])
    message = TextAreaField('Signalement',
                            [validators.DataRequired(BaseForm.DATA_REQUIRED)])


class CrowdsourcingForm(BaseForm):
    id = StringField()
    before = StringField()
    after = StringField()
    username = StringField()
    auth_provider = StringField()