# `ad_gplink`

Refer to the Terraform Registory for docs: [`ad_gplink`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink).

# `gplink` Submodule <a name="`gplink` Submodule" id="@cdktf/provider-ad.gplink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Gplink <a name="Gplink" id="@cdktf/provider-ad.gplink.Gplink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink ad_gplink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gplink.Gplink.Initializer"></a>

```python
from cdktf_cdktf_provider_ad import gplink

gplink.Gplink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gpo_guid: str,
  target_dn: str,
  enabled: typing.Union[bool, IResolvable] = None,
  enforced: typing.Union[bool, IResolvable] = None,
  id: str = None,
  order: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.gpoGuid">gpo_guid</a></code> | <code>str</code> | The GUID of the GPO that will be linked to the container object. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.targetDn">target_dn</a></code> | <code>str</code> | The DN of the object the GPO will be linked to. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the state of the GP link between a GPO and a container object. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the GPO will be enforced on the container object. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#id Gplink#id}. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.order">order</a></code> | <code>typing.Union[int, float]</code> | Sets the precedence between multiple GPOs linked to the same container object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gpo_guid`<sup>Required</sup> <a name="gpo_guid" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.gpoGuid"></a>

- *Type:* str

The GUID of the GPO that will be linked to the container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#gpo_guid Gplink#gpo_guid}

---

##### `target_dn`<sup>Required</sup> <a name="target_dn" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.targetDn"></a>

- *Type:* str

The DN of the object the GPO will be linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#target_dn Gplink#target_dn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the state of the GP link between a GPO and a container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#enabled Gplink#enabled}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.enforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the GPO will be enforced on the container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#enforced Gplink#enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#id Gplink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.order"></a>

- *Type:* typing.Union[int, float]

Sets the precedence between multiple GPOs linked to the same container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#order Gplink#order}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetEnforced">reset_enforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetOrder">reset_order</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ad.gplink.Gplink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ad.gplink.Gplink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gplink.Gplink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gplink.Gplink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ad.gplink.Gplink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ad.gplink.Gplink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ad.gplink.Gplink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ad.gplink.Gplink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ad.gplink.Gplink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ad.gplink.Gplink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ad.gplink.Gplink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ad.gplink.Gplink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ad.gplink.Gplink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ad.gplink.Gplink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.gplink.Gplink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-ad.gplink.Gplink.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enforced` <a name="reset_enforced" id="@cdktf/provider-ad.gplink.Gplink.resetEnforced"></a>

```python
def reset_enforced() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ad.gplink.Gplink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-ad.gplink.Gplink.resetOrder"></a>

```python
def reset_order() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ad.gplink.Gplink.isConstruct"></a>

```python
from cdktf_cdktf_provider_ad import gplink

gplink.Gplink.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gplink.Gplink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ad.gplink.Gplink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ad import gplink

gplink.Gplink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gplink.Gplink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ad.gplink.Gplink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ad import gplink

gplink.Gplink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gplink.Gplink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enforcedInput">enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.gpoGuidInput">gpo_guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.targetDnInput">target_dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.gpoGuid">gpo_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.targetDn">target_dn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.gplink.Gplink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ad.gplink.Gplink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gplink.Gplink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ad.gplink.Gplink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ad.gplink.Gplink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ad.gplink.Gplink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ad.gplink.Gplink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gplink.Gplink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gplink.Gplink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ad.gplink.Gplink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ad.gplink.Gplink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gplink.Gplink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gplink.Gplink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gplink.Gplink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-ad.gplink.Gplink.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktf/provider-ad.gplink.Gplink.property.enforcedInput"></a>

```python
enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gpo_guid_input`<sup>Optional</sup> <a name="gpo_guid_input" id="@cdktf/provider-ad.gplink.Gplink.property.gpoGuidInput"></a>

```python
gpo_guid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ad.gplink.Gplink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-ad.gplink.Gplink.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_dn_input`<sup>Optional</sup> <a name="target_dn_input" id="@cdktf/provider-ad.gplink.Gplink.property.targetDnInput"></a>

```python
target_dn_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ad.gplink.Gplink.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-ad.gplink.Gplink.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gpo_guid`<sup>Required</sup> <a name="gpo_guid" id="@cdktf/provider-ad.gplink.Gplink.property.gpoGuid"></a>

```python
gpo_guid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gplink.Gplink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-ad.gplink.Gplink.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_dn`<sup>Required</sup> <a name="target_dn" id="@cdktf/provider-ad.gplink.Gplink.property.targetDn"></a>

```python
target_dn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.gplink.Gplink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GplinkConfig <a name="GplinkConfig" id="@cdktf/provider-ad.gplink.GplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gplink.GplinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ad import gplink

gplink.GplinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gpo_guid: str,
  target_dn: str,
  enabled: typing.Union[bool, IResolvable] = None,
  enforced: typing.Union[bool, IResolvable] = None,
  id: str = None,
  order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.gpoGuid">gpo_guid</a></code> | <code>str</code> | The GUID of the GPO that will be linked to the container object. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.targetDn">target_dn</a></code> | <code>str</code> | The DN of the object the GPO will be linked to. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls the state of the GP link between a GPO and a container object. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the GPO will be enforced on the container object. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#id Gplink#id}. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Sets the precedence between multiple GPOs linked to the same container object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gplink.GplinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gplink.GplinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ad.gplink.GplinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ad.gplink.GplinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gplink.GplinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gplink.GplinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gplink.GplinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gpo_guid`<sup>Required</sup> <a name="gpo_guid" id="@cdktf/provider-ad.gplink.GplinkConfig.property.gpoGuid"></a>

```python
gpo_guid: str
```

- *Type:* str

The GUID of the GPO that will be linked to the container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#gpo_guid Gplink#gpo_guid}

---

##### `target_dn`<sup>Required</sup> <a name="target_dn" id="@cdktf/provider-ad.gplink.GplinkConfig.property.targetDn"></a>

```python
target_dn: str
```

- *Type:* str

The DN of the object the GPO will be linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#target_dn Gplink#target_dn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.gplink.GplinkConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls the state of the GP link between a GPO and a container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#enabled Gplink#enabled}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktf/provider-ad.gplink.GplinkConfig.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the GPO will be enforced on the container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#enforced Gplink#enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gplink.GplinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#id Gplink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-ad.gplink.GplinkConfig.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the precedence between multiple GPOs linked to the same container object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gplink#order Gplink#order}

---



