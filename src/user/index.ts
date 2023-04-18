// https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, the user will not be allowed to change their password.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}
  */
  readonly cannotChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Specifies the user's town or city. This parameter sets the City property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}
  */
  readonly city?: string;
  /**
  * Specifies the user's company. This parameter sets the Company property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}
  */
  readonly company?: string;
  /**
  * A DN of the container object that will be holding the user.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}
  */
  readonly container?: string;
  /**
  * Specifies the country by setting the country code (refer to ISO 3166)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}
  */
  readonly country?: string;
  /**
  * JSON encoded map that represents key/value pairs for custom attributes. Please note that `terraform import` will not import these attributes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}
  */
  readonly customAttributes?: string;
  /**
  * Specifies the user's department. This parameter sets the Department property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}
  */
  readonly department?: string;
  /**
  * Specifies a description of the object. This parameter sets the value of the Description property for the user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * The Display Name of an Active Directory user.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}
  */
  readonly displayName: string;
  /**
  * Specifies the user's division. This parameter sets the Division property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}
  */
  readonly division?: string;
  /**
  * Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}
  */
  readonly employeeId?: string;
  /**
  * Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}
  */
  readonly employeeNumber?: string;
  /**
  * If set to false, the user will be disabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the user's fax phone number. This parameter sets the Fax property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}
  */
  readonly fax?: string;
  /**
  * Specifies the user's given name. This parameter sets the GivenName property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}
  */
  readonly givenName?: string;
  /**
  * Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}
  */
  readonly homeDrive?: string;
  /**
  * Specifies the URL of the home page of the object. This parameter sets the homePage property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}
  */
  readonly homePage?: string;
  /**
  * Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}
  */
  readonly homePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}
  */
  readonly initialPassword?: string;
  /**
  * Specifies the initials that represent part of a user's name. Maximum 6 char.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}
  */
  readonly initials?: string;
  /**
  * Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Specifies the location of the user's office or place of business. This parameter sets the Office property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}
  */
  readonly office?: string;
  /**
  * Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}
  */
  readonly officePhone?: string;
  /**
  * Specifies the user's organization. This parameter sets the Organization property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}
  */
  readonly organization?: string;
  /**
  * Specifies a name in addition to a user's given name and surname, such as the user's middle name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}
  */
  readonly otherName?: string;
  /**
  * If set to true, the password for this user will not expire.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}
  */
  readonly passwordNeverExpires?: boolean | cdktf.IResolvable;
  /**
  * Specifies the user's post office box number. This parameter sets the POBox property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}
  */
  readonly poBox?: string;
  /**
  * Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The Principal Name of an Active Directory user.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}
  */
  readonly principalName: string;
  /**
  * The pre-win2k user logon name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}
  */
  readonly samAccountName: string;
  /**
  * If set to true, a smart card is required to logon. This parameter sets the SmartCardLoginRequired property for a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}
  */
  readonly smartCardLogonRequired?: boolean | cdktf.IResolvable;
  /**
  * Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}
  */
  readonly state?: string;
  /**
  * Specifies the user's street address. This parameter sets the StreetAddress property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Specifies the user's last name or surname. This parameter sets the Surname property of a user object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}
  */
  readonly surname?: string;
  /**
  * Specifies the user's title. This parameter sets the Title property of a user object
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}
  */
  readonly title?: string;
  /**
  * If set to true, the user account is trusted for Kerberos delegation. A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}
  */
  readonly trustedForDelegation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user ad_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ad_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user ad_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'ad_user',
      terraformGeneratorMetadata: {
        providerName: 'ad',
        providerVersion: '0.4.4',
        providerVersionConstraint: '~> 0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cannotChangePassword = config.cannotChangePassword;
    this._city = config.city;
    this._company = config.company;
    this._container = config.container;
    this._country = config.country;
    this._customAttributes = config.customAttributes;
    this._department = config.department;
    this._description = config.description;
    this._displayName = config.displayName;
    this._division = config.division;
    this._emailAddress = config.emailAddress;
    this._employeeId = config.employeeId;
    this._employeeNumber = config.employeeNumber;
    this._enabled = config.enabled;
    this._fax = config.fax;
    this._givenName = config.givenName;
    this._homeDirectory = config.homeDirectory;
    this._homeDrive = config.homeDrive;
    this._homePage = config.homePage;
    this._homePhone = config.homePhone;
    this._id = config.id;
    this._initialPassword = config.initialPassword;
    this._initials = config.initials;
    this._mobilePhone = config.mobilePhone;
    this._office = config.office;
    this._officePhone = config.officePhone;
    this._organization = config.organization;
    this._otherName = config.otherName;
    this._passwordNeverExpires = config.passwordNeverExpires;
    this._poBox = config.poBox;
    this._postalCode = config.postalCode;
    this._principalName = config.principalName;
    this._samAccountName = config.samAccountName;
    this._smartCardLogonRequired = config.smartCardLogonRequired;
    this._state = config.state;
    this._streetAddress = config.streetAddress;
    this._surname = config.surname;
    this._title = config.title;
    this._trustedForDelegation = config.trustedForDelegation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cannot_change_password - computed: false, optional: true, required: false
  private _cannotChangePassword?: boolean | cdktf.IResolvable; 
  public get cannotChangePassword() {
    return this.getBooleanAttribute('cannot_change_password');
  }
  public set cannotChangePassword(value: boolean | cdktf.IResolvable) {
    this._cannotChangePassword = value;
  }
  public resetCannotChangePassword() {
    this._cannotChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannotChangePasswordInput() {
    return this._cannotChangePassword;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: string; 
  public get customAttributes() {
    return this.getStringAttribute('custom_attributes');
  }
  public set customAttributes(value: string) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // employee_id - computed: false, optional: true, required: false
  private _employeeId?: string; 
  public get employeeId() {
    return this.getStringAttribute('employee_id');
  }
  public set employeeId(value: string) {
    this._employeeId = value;
  }
  public resetEmployeeId() {
    this._employeeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeIdInput() {
    return this._employeeId;
  }

  // employee_number - computed: false, optional: true, required: false
  private _employeeNumber?: string; 
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }
  public set employeeNumber(value: string) {
    this._employeeNumber = value;
  }
  public resetEmployeeNumber() {
    this._employeeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeNumberInput() {
    return this._employeeNumber;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fax - computed: false, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // home_drive - computed: false, optional: true, required: false
  private _homeDrive?: string; 
  public get homeDrive() {
    return this.getStringAttribute('home_drive');
  }
  public set homeDrive(value: string) {
    this._homeDrive = value;
  }
  public resetHomeDrive() {
    this._homeDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDriveInput() {
    return this._homeDrive;
  }

  // home_page - computed: false, optional: true, required: false
  private _homePage?: string; 
  public get homePage() {
    return this.getStringAttribute('home_page');
  }
  public set homePage(value: string) {
    this._homePage = value;
  }
  public resetHomePage() {
    this._homePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePageInput() {
    return this._homePage;
  }

  // home_phone - computed: false, optional: true, required: false
  private _homePhone?: string; 
  public get homePhone() {
    return this.getStringAttribute('home_phone');
  }
  public set homePhone(value: string) {
    this._homePhone = value;
  }
  public resetHomePhone() {
    this._homePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePhoneInput() {
    return this._homePhone;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // initial_password - computed: false, optional: true, required: false
  private _initialPassword?: string; 
  public get initialPassword() {
    return this.getStringAttribute('initial_password');
  }
  public set initialPassword(value: string) {
    this._initialPassword = value;
  }
  public resetInitialPassword() {
    this._initialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPasswordInput() {
    return this._initialPassword;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // mobile_phone - computed: false, optional: true, required: false
  private _mobilePhone?: string; 
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }
  public set mobilePhone(value: string) {
    this._mobilePhone = value;
  }
  public resetMobilePhone() {
    this._mobilePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone;
  }

  // office - computed: false, optional: true, required: false
  private _office?: string; 
  public get office() {
    return this.getStringAttribute('office');
  }
  public set office(value: string) {
    this._office = value;
  }
  public resetOffice() {
    this._office = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeInput() {
    return this._office;
  }

  // office_phone - computed: false, optional: true, required: false
  private _officePhone?: string; 
  public get officePhone() {
    return this.getStringAttribute('office_phone');
  }
  public set officePhone(value: string) {
    this._officePhone = value;
  }
  public resetOfficePhone() {
    this._officePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officePhoneInput() {
    return this._officePhone;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // other_name - computed: false, optional: true, required: false
  private _otherName?: string; 
  public get otherName() {
    return this.getStringAttribute('other_name');
  }
  public set otherName(value: string) {
    this._otherName = value;
  }
  public resetOtherName() {
    this._otherName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNameInput() {
    return this._otherName;
  }

  // password_never_expires - computed: false, optional: true, required: false
  private _passwordNeverExpires?: boolean | cdktf.IResolvable; 
  public get passwordNeverExpires() {
    return this.getBooleanAttribute('password_never_expires');
  }
  public set passwordNeverExpires(value: boolean | cdktf.IResolvable) {
    this._passwordNeverExpires = value;
  }
  public resetPasswordNeverExpires() {
    this._passwordNeverExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNeverExpiresInput() {
    return this._passwordNeverExpires;
  }

  // po_box - computed: false, optional: true, required: false
  private _poBox?: string; 
  public get poBox() {
    return this.getStringAttribute('po_box');
  }
  public set poBox(value: string) {
    this._poBox = value;
  }
  public resetPoBox() {
    this._poBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poBoxInput() {
    return this._poBox;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // principal_name - computed: false, optional: false, required: true
  private _principalName?: string; 
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
  public set principalName(value: string) {
    this._principalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalNameInput() {
    return this._principalName;
  }

  // sam_account_name - computed: false, optional: false, required: true
  private _samAccountName?: string; 
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
  }
  public set samAccountName(value: string) {
    this._samAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samAccountNameInput() {
    return this._samAccountName;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // smart_card_logon_required - computed: false, optional: true, required: false
  private _smartCardLogonRequired?: boolean | cdktf.IResolvable; 
  public get smartCardLogonRequired() {
    return this.getBooleanAttribute('smart_card_logon_required');
  }
  public set smartCardLogonRequired(value: boolean | cdktf.IResolvable) {
    this._smartCardLogonRequired = value;
  }
  public resetSmartCardLogonRequired() {
    this._smartCardLogonRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCardLogonRequiredInput() {
    return this._smartCardLogonRequired;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // trusted_for_delegation - computed: false, optional: true, required: false
  private _trustedForDelegation?: boolean | cdktf.IResolvable; 
  public get trustedForDelegation() {
    return this.getBooleanAttribute('trusted_for_delegation');
  }
  public set trustedForDelegation(value: boolean | cdktf.IResolvable) {
    this._trustedForDelegation = value;
  }
  public resetTrustedForDelegation() {
    this._trustedForDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedForDelegationInput() {
    return this._trustedForDelegation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cannot_change_password: cdktf.booleanToTerraform(this._cannotChangePassword),
      city: cdktf.stringToTerraform(this._city),
      company: cdktf.stringToTerraform(this._company),
      container: cdktf.stringToTerraform(this._container),
      country: cdktf.stringToTerraform(this._country),
      custom_attributes: cdktf.stringToTerraform(this._customAttributes),
      department: cdktf.stringToTerraform(this._department),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      division: cdktf.stringToTerraform(this._division),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      employee_id: cdktf.stringToTerraform(this._employeeId),
      employee_number: cdktf.stringToTerraform(this._employeeNumber),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fax: cdktf.stringToTerraform(this._fax),
      given_name: cdktf.stringToTerraform(this._givenName),
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      home_drive: cdktf.stringToTerraform(this._homeDrive),
      home_page: cdktf.stringToTerraform(this._homePage),
      home_phone: cdktf.stringToTerraform(this._homePhone),
      id: cdktf.stringToTerraform(this._id),
      initial_password: cdktf.stringToTerraform(this._initialPassword),
      initials: cdktf.stringToTerraform(this._initials),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      office: cdktf.stringToTerraform(this._office),
      office_phone: cdktf.stringToTerraform(this._officePhone),
      organization: cdktf.stringToTerraform(this._organization),
      other_name: cdktf.stringToTerraform(this._otherName),
      password_never_expires: cdktf.booleanToTerraform(this._passwordNeverExpires),
      po_box: cdktf.stringToTerraform(this._poBox),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      principal_name: cdktf.stringToTerraform(this._principalName),
      sam_account_name: cdktf.stringToTerraform(this._samAccountName),
      smart_card_logon_required: cdktf.booleanToTerraform(this._smartCardLogonRequired),
      state: cdktf.stringToTerraform(this._state),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      surname: cdktf.stringToTerraform(this._surname),
      title: cdktf.stringToTerraform(this._title),
      trusted_for_delegation: cdktf.booleanToTerraform(this._trustedForDelegation),
    };
  }
}
